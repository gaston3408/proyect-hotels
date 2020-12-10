import React, { useState, useEffect } from 'react' ;
import moment from 'moment' ;
import Hero from './components/Hero' ;
import 'bulma/css/bulma.css' ;
import Filters from './components/Filters' ;
import hotelsData from './data' ;
import Hotels from './components/Hotels' ;

const App = () => {
    const initialFilters = {
        dateFrom: moment().toDate(),
        dateTo: moment().add( 90, 'days' ).toDate(),
        country: undefined,
        price: undefined,
        rooms: undefined,

    } ;
    const [ filters, setFilters ] = useState( initialFilters ) ;
    const [ hotels, setHotels ] = useState( hotelsData ) ;

    const handleChangeFilter = ( e ) => {
        e.preventDefault() ;
        if ( e.target.name === 'dateFrom' && moment().format( 'DD-MM-YYYY' ) > moment( e.target.value ).format( 'DD-MM-YYYY' ) ) {
            return alert( 'La fecha no puede ser anterior a hoy' ) ;
        }
        if ( e.target.name === 'dateTo' && ( moment( filters.dateFrom ).format( 'YYYY-MM-DD' ) > moment( e.target.value ).format( 'YYYY-MM-DD' ) ) ) {
            return alert( 'La fecha no puede ser anterior a la primer fecha' ) ;
        }
        setFilters( {
            ...filters,
            [e.target.name]: e.target.value === 'Todos los países' || e.target.value === 'Cualquier tamaño' || e.target.value === 'Cualquier precio' ? undefined : e.target.value,
        } ) ;
    } ;

    useEffect( () => {
        let filteredHotels = hotelsData ;

        filteredHotels = filteredHotels.filter( ( hotel ) => (
            moment( filters.dateFrom ).format( 'YYYY-MM-DD' ) <= moment( hotel.availabilityFrom ).format( 'YYYY-MM-DD' )
            && moment( filters.dateTo ).toDate() >= moment( hotel.availabilityTo ).toDate()
        ) ) ;

        if ( filters.country ) {
            filteredHotels = filteredHotels.filter( ( hotel ) => hotel.country === filters.country ) ;
        }

        if ( filters.price ) {
            filteredHotels = filteredHotels.filter( ( hotel ) => hotel.price === parseInt( filters.price ) ) ;
        }
        if ( filters.rooms ) {
            filteredHotels = filteredHotels.filter( ( hotel ) => hotel.rooms >= filters.rooms ) ;
        }

        setHotels( filteredHotels ) ;
    }, [ filters ] ) ;

    return (
        <>
            <Hero filters={ filters } />
            <Filters
                filters={ filters }
                handleChange={ handleChangeFilter }
            />
            <Hotels hotels={ hotels } />
        </>
    ) ;
} ;

export default App ;
