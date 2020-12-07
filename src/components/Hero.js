import React from 'react' ;
import moment from 'moment' ;
import 'moment/locale/es' ;

const Hero = ( { filters } ) => {
    const getValue = ( price ) => {
        if ( price === '1' ) return '$' ;
        if ( price === '2' ) return '$$' ;
        if ( price === '3' ) return '$$$' ;
        if ( price === '4' ) return '$$$$' ;
    } ;

    return (
        <>
            <section className="hero background">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title has-text-light">HOTELES</h1>
                        <h2 className="subtitle has-text-light">
                            Desde el
                            { ' ' }
                            <strong className="has-text-light">{ `${moment( filters.dateFrom ).format( 'DD-MM-YYYY' )} ` }</strong>
                            { moment( filters.dateTo ).format( 'DD-MM-YYYY' ) !== moment().format( 'DD-MM-YYYY' )
                        && (
                            <p>
                                hasta el
                                { ' ' }
                                <strong className="has-text-light">{ moment( filters.dateTo ).format( 'DD-MM-YYYY' ) }</strong>
                            </p>
                        ) }
                            { ' ' }
                            { filters.country !== undefined && filters.country !== 'Todos los países'
                     && `en ${filters.country}` }
                            { ' ' }
                            { filters.price !== undefined && filters.price !== 'Cualquier precio'
                     && `del valor de ${getValue( filters.price )}` }
                            { ' ' }
                            { filters.rooms !== undefined && filters.rooms !== 'Cualquier tamaño'
                     && `con más de ${filters.rooms} habitaciones` }
                        </h2>
                    </div>
                </div>
            </section>
        </>
    ) ;
} ;

export default Hero ;
