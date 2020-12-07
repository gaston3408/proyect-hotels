import React from 'react' ;
import Hotel from './Hotel' ;

const Hotels = ( { hotels } ) => (
    <>
        { hotels.length === 0 ? (
            <article className="message is-warning">
                <div className="message-body">
                    No se han encontrado hoteles que coincidan con los parámetros de búsqueda.
                </div>
            </article>

        ) : (
            <section className="section" style={ { marginTop: '3em' } }>
                { console.log( hotels ) }
                <div className="container">
                    <div className="columns is-multiline">
                        { hotels.map( ( hotel ) => (

                            <div className="column is-one-third">
                                <Hotel hotel={ hotel } />
                            </div>

                        ) ) }
                    </div>
                </div>
            </section>
        ) }

    </>
) ;

export default Hotels ;
