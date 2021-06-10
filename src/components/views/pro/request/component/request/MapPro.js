import { Box,Avatar } from '@material-ui/core'
import React from 'react'
import { Map, Marker, Popup, TileLayer, CircleMarker} from 'react-leaflet'


const MapPro = ({profs, client}) => {

    const clientPosition = {
        lat: client.address.lat,
        lng: client.address.lng
    }

    const redOptions = { color: '#2880f9' }

    return (
        <div>
            <Map center={[clientPosition.lat, clientPosition.lng]} zoom={13} scrollWheelZoom={false} >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                    <Marker position={[clientPosition.lat, clientPosition.lng]} >
                        {/* [45.451497, -73.463471] */}
                        <Popup>
                                {/* Client */}
                        </Popup>
                    </Marker>
                {
                    profs.map((row,index) => {
                        return(
                            <Marker key={index} position={[row.lat, row.lng]}>
                                <Popup>
                                    <Box display="flex" flexDirection="row" justifyContent="space-tweeter">
                                        <Box mr={1}>
                                            <Avatar alt={row.firstName} src={row.url} />
                                        </Box>
                                        <Box>
                                            <Box sytle={{fontWeight: 'bold'}}>
                                                {`${row.firstName}`} <br /> {`Distance: ${row.dist}`}
                                            </Box>
                                        </Box>
                                    </Box>
                                </Popup>
                            </Marker>
                        )
                    })
                }
            </Map>
        </div>
    )
}

export default MapPro
