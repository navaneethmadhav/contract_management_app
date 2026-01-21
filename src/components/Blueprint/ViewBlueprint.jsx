import React from 'react'
import { useParams } from "react-router-dom";
import styles from './ViewBlueprint.module.css'

const ViewBlueprint = () => {

    const { id } = useParams();

    const blueprints =
        JSON.parse(localStorage.getItem("blueprints")) || [];

    const blueprint = blueprints.find(bp => bp.id === id);

    if (!blueprint) return <p>Blueprint not found</p>;

    return (
        <div>
            <h2>{blueprint.name}</h2>

            <div className={styles.canvas_area}>
                {blueprint.fields.map(field => (
                    <div
                        key={field.id}
                        style={{
                            position: "absolute",
                            left: field.x,
                            top: field.y
                        }}
                    >
                        <label>{field.label}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ViewBlueprint