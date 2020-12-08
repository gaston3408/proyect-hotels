import React from 'react' ;
import moment from 'moment' ;
import 'moment/locale/es' ;

const Hotel = ( { hotel } ) => (
    <div className="card">
        <div className="card-image">
            <figure className="image is-4by3">
                <img src={ hotel.photo } alt={ hotel.name } />
            </figure>
        </div>
        <div className="card-content">
            <p className="title is-4">{ hotel.name }</p>
            <p>{ `Desde ${moment( hotel.availabilityFrom ).format( 'DD-MM-YYYY' )} hasta el ${moment( hotel.availabilityTo ).format( 'DD-MM-YYYY' )}` }</p>
            <p>{ hotel.description }</p>
            <div className="field is-grouped is-grouped-multiline" style={ { marginTop: '1em' } }>
                <div className="control">
                    <div className="tags has-addons">
                        <span className="tag is-medium is-info"><i className="fas fa-map-marker" /></span>
                        <span className="tag is-medium">{ `${hotel.city}, ${hotel.country}` }</span>
                    </div>
                </div>
                <div className="control">
                    <div className="tags has-addons">
                        <span className="tag is-medium is-info"><i className="fas fa-bed" /></span>
                        <span className="tag is-medium">
                            { hotel.rooms }
                            { ' ' }
                            Habitaciones
                        </span>
                    </div>
                </div>
                <div className="control">
                    <div className="tags">
                        <span className="tag is-medium is-info">
                            <i className="fas fa-dollar-sign" style={ { margin: '0 .125em' } } />
                            <i className="fas fa-dollar-sign" style={ { margin: '0 .125em', opacity: hotel.price < 2 ? '.25' : '1' } } />
                            <i className="fas fa-dollar-sign" style={ { margin: '0 .125em', opacity: hotel.price < 3 ? '.25' : '1' } } />
                            <i className="fas fa-dollar-sign" style={ { margin: '0 .125em', opacity: hotel.price < 4 ? '.25' : '1' } } />
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div className="card-footer">
            <button onClick={ () => alert( 'No implementamos esto aún :(' ) } className="button card-footer-item has-background-primary has-text-white has-text-weight-bold">Reservar</button>
        </div>
    </div>
) ;

export default Hotel ;
