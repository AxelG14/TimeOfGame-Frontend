import { inject, Injectable } from "@angular/core";
import { VideoGames } from "./video-games";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({  providedIn: 'root' })

export class VideoGamesService {
    private urlBase: string = "http://localhost:8080/videogames/games";
    private clienteHttp = inject( HttpClient );

    obtenerVideoGamesLista(): Observable<VideoGames[]> {
        return this.clienteHttp.get<VideoGames[]>( this.urlBase );
    }
    agregarVideoGame( videoGame: VideoGames ): Observable<Object> {
        return this.clienteHttp.post( this.urlBase, videoGame );
    }

    obtenerVideoGamePorId( id: number ) {
        return this.clienteHttp.get<VideoGames>( `${ this.urlBase }/${ id }` );
    }
    editarVideoGame( id: number, videoGame: VideoGames ) {
        return this.clienteHttp.put( `${ this.urlBase }/${ id }`, videoGame );
    }
    eliminarVideoGame( id: number ): Observable<Object> {
        return this.clienteHttp.delete( `${ this.urlBase }/${ id }` );
    }

}
