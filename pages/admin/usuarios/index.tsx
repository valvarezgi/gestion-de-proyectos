import React from 'react';
import Link from 'next/link'

const index = () => {
    return(
        <div>
            <div>Pagina de admin de usuarios</div> 
            <Link>
            <a href="/">Ir al home</a>
            </Link>
        </div>
    )
}

export default index;