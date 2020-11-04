import React from 'react'

import styles from './Loading.module.css'

const Loading = () => {
    return (
        <div className="container">
            <div className={styles.lds_roller}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Loading;