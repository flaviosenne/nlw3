import React from 'react'
import { Link } from 'react-router-dom'
import mapMarkerImg from '../images/map-market.svg'
import {FiPlus} from 'react-icons/fi'

import { Map, TileLayer}from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import '../styles/pages/orphanagesmap.css'
function OrphanagesMap(){
    return (
        <div id = 'page-map'>
            <aside>
                <header>
                    <img  src = {mapMarkerImg} alt = 'happy'/>
                    
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Rio do Sul</strong>
                    <span>Santa Catarina</span>
                </footer>
            </aside>


            <Map 
                center = {[-20.5256554,-47.3932603]}
                zoom = {15}
                style = {{width: '100%', height: '100%'}}

            >
                {/* <TileLayer url = 'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png' /> */}
                {/* map box */}
                <TileLayer url = 
                {`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_TOKEN_MAPBOX}`} />

            </Map>

            <Link to = '' className = 'create-orphanage'>
                <FiPlus size = {32} color = '#fff'/>
            </Link>
        </div>
    )
}
export default OrphanagesMap