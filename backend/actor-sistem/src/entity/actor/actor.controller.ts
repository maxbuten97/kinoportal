import { Controller, } from '@nestjs/common';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
import { ActorService } from './actor.service';
import { AddActorWithImageDto } from '../../dto/add.actor.dto';
import { ActorDto } from '../../dto/actor.dto';
import { ActorIdDto } from '../../dto/actorId.dto';
import { ActorFilmService } from '../actor-film/actor.film.service';
import { ActorFilmDto } from '../../dto/actor.film.dto';

@Controller()
export class ActorController {
    
    constructor(private readonly actorService: ActorService,
        private readonly actorFilmService: ActorFilmService) {}

    @MessagePattern('get.actor')
    getActor(@Payload() data: number, @Ctx() context: RmqContext) {  
        let actor = this.actorService.getActor(data);
        return actor;
    }

    @MessagePattern('get.all.actor')
    getAllActor(@Payload() data: any, @Ctx() context: RmqContext) {  
        return this.actorService.getAllActors();
    }

    @MessagePattern('get.all.actor.film')
    getActorForFilm(@Payload() data: any, @Ctx() context: RmqContext) {  
        return this.actorService.getActorsForFilm(data);
    }

    @MessagePattern('get.actor.by.fio')
    getActorsByFio(@Payload() data: string, @Ctx() context: RmqContext) {       
        return this.actorService.getActorByFio(data);
    }

    @MessagePattern('post.actor')
    postActor(@Payload() data: AddActorWithImageDto, @Ctx() context: RmqContext) {    
        return this.actorService.addActor(data.actorDto,data.image);

    }

    @MessagePattern('put.actor')
    putActor(@Payload() data: ActorDto, @Ctx() context: RmqContext) {       
        return this.actorService.updateActor(data);
    }

    @MessagePattern('delete.actor')
    deleteActor(@Payload() data: ActorIdDto, @Ctx() context: RmqContext) {       
        return this.actorService.deleteActor(data.actorId);
    }

    @MessagePattern('create.film')
    createFilm(@Payload() data: ActorFilmDto, @Ctx() context: RmqContext) {  
        return this.actorFilmService.createFilm(data.filmId, data.actorsId, data.role);
    }

    @MessagePattern('delete.film')
    deleteFilm(@Payload() data: any, @Ctx() context: RmqContext) {      
        return this.actorFilmService.deleteFilm(data);
    }

    @MessagePattern('filt-film-actor')
    async getmoviesIdForActor(@Payload() data: any, @Ctx() context: RmqContext) {     
        return  (await this.actorFilmService.getFilmsForActorAndRole(data.actorId, data.roleName)).map(item => item.filmId);
    }
}