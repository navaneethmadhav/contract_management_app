import React from 'react'
import styles from './NewBlueprint.module.css'

const NewBlueprint = () => {
    return (
        <div>
            <div>
                <div className={styles}>
                    <label htmlFor="">Blue printname: </label>
                    <input type="text" />
                </div>
                <button>Save blueprint</button>
            </div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-4'>
                        <h3>Field Types</h3>
                        <button>Text</button>
                        <button>Date</button>
                        <button>Signature</button>
                        <button>Checkbox</button>
                    </div>
                    <div className='col-lg-4'>
                        <h3>Field Settings</h3>
                        <div>
                            <label htmlFor="">Label</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">Type</label>
                            <span>Text</span>
                        </div>
                        <div>
                            <label htmlFor="">X</label>
                            <span>120</span>
                        </div>
                        <div>
                            <label htmlFor="">Y</label>
                            <span>5</span>
                        </div>
                        <button>save</button>
                    </div>
                    <div className='col-lg-4'>
                        <h3>Canvas</h3>
                        <div className={styles.canvas_area}>
                            Canvas Area
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewBlueprint