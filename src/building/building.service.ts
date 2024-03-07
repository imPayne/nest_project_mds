import { Inject, Injectable, NotFoundException, forwardRef } from '@nestjs/common';
import { CreateBuildingDto } from './dto/create-building.dto';
import { UpdateBuildingDto } from './dto/update-building.dto';
import { BaseService } from 'src/@core/base-service';
import { BuildingEntity } from './entities/building.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { AddressService } from 'src/address/address.service';
import { CommonFacilityService } from 'src/common-facility/common-facility.service';
import { BuildingHasFacilityService } from 'src/building_has_facility/building_has_facility.service';
import { BuildingHasFacilityEntity } from 'src/building_has_facility/entities/building_has_facility.entity';
import { CommonFacilityEntity } from 'src/common-facility/entities/common-facility.entity';
import { AddressEntity } from 'src/address/entities/address.entity';
import { AddFacilityDto } from './dto/add-facilities.dto';
import { ApartmentService } from 'src/apartment/apartment.service';

@Injectable()
export class BuildingService extends BaseService<BuildingEntity> {
  constructor(
    @InjectRepository(BuildingEntity)
    private readonly buildingRepository: Repository<BuildingEntity>,
    @Inject(forwardRef(()=>ApartmentService))
    private readonly apartmentService:ApartmentService,
    private readonly addressService: AddressService,
    private readonly facilityService: BuildingHasFacilityService,
    private readonly commonService: CommonFacilityService,
    protected readonly dataSource: DataSource,
  ) {
    super(dataSource);
  }

  async createBuilding(
    createBuildingDto: CreateBuildingDto,
  ): Promise<BuildingEntity> {
    const building: BuildingEntity = new BuildingEntity();
    Object.assign(building, createBuildingDto);
    const address: AddressEntity = await this.addressService.create(
      createBuildingDto.createAddressDto,
    );
    building.address = address;
    const createdBuilding: BuildingEntity =
      await this.saveEntities(building)?.[0];

    return createdBuilding;
  }

  async assignFacilitiesAndCreateTable(id: number, AddFacilityDto:AddFacilityDto): Promise<BuildingEntity> {
    const building = await this.buildingRepository.findOne({where: {id}});
    
    for (const f of AddFacilityDto.facilities) {
        const facility = await this.commonService.findOne(f.facilityId);
        if (facility) {
           
            const buildingHasFacility: BuildingHasFacilityEntity = new BuildingHasFacilityEntity();
            const data = f.renovationDate ? [f.renovationDate, building, facility] : [building.constructionDate, building, facility];
            Object.assign(buildingHasFacility, data);
            await this.facilityService.create(buildingHasFacility) ;

        } else {
            throw new NotFoundException(`Common Facility with ID ${f} not found`);
        }
    }
    

    return this.saveEntities(building)?.[0];
}

  findAll(): Promise<BuildingEntity[]> {
    return this.buildingRepository.find({
      relations: ['facilities', 'address'],
    });
  }

  findOne(id: number): Promise<BuildingEntity> {
    return this.buildingRepository.findOne({
      where: { id },
      relations: ['facilities', 'address','apartments'],
    });
  }

  async numberOfApart(id:number){
    const building = await this.findOne(id)
    let numberAppartment = building.apartments.length
    return numberAppartment
  }

  async occupationPercentage(id:number){
    const building = await this.findOne(id)
    let numberApartmentOccupy = 0
    for (let i = 0; i < building.apartments.length; i++){
      const apartment = await this.apartmentService.findOne(building.apartments[i].id);
      const numberTenants = apartment.tenants.length;
      if (numberTenants > 0){
          numberApartmentOccupy++;
      }
  }  
    const percentage = (numberApartmentOccupy*100)/building.apartments.length;
    const percentageOccupy = `${Number(percentage.toFixed(1))}%`;
    return percentageOccupy;
  }

  async nbTenant(id:number){
    const building = await this.findOne(id)
    let nbTenant = 0
    for (let i = 0; i < building.apartments.length; i++){
      const apartment = await this.apartmentService.findOne(building.apartments[i].id);
      const numberTenants = apartment.tenants.length;
      nbTenant = nbTenant + numberTenants
    }
    return nbTenant;
  }

  async underOccupy(id:number){
    const building = await this.findOne(id)
    let nbApartUnder = 0
    for (let i = 0; i < building.apartments.length; i++){
      const apartment = await this.apartmentService.findOne(building.apartments[i].id);
      if (apartment.type.capacity > apartment.tenants.length){
        nbApartUnder ++;
      }
    }
    return nbApartUnder;
  }

  async overOccupy(id:number){
    const building = await this.findOne(id)
    let nbApartOver = 0
    for (let i = 0; i < building.apartments.length; i++){
      const apartment = await this.apartmentService.findOne(building.apartments[i].id);
      if (apartment.type.capacity < apartment.tenants.length){
        nbApartOver ++;
      }
    }
    return nbApartOver
  }

  async update(
    id: number,
    updateBuildingDto: UpdateBuildingDto,
  ): Promise<BuildingEntity> {
    const building = await this.buildingRepository.findOne({ where: { id } });
    if (!building) {
      throw new NotFoundException('Building not found');
    }
    Object.assign(building, updateBuildingDto);
    return this.buildingRepository.save(building);
  }

  async remove(id: number): Promise<BuildingEntity> {
    const result = await this.findOne(id);
    await this.buildingRepository.delete(id);
    return result;
  }
}
