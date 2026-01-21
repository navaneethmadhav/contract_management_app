import React, { useEffect, useState } from 'react'
import styles from './NewBlueprint.module.css'
import { useParams, useNavigate } from "react-router-dom";

const EditBlueprint = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [blueprintName, setBlueprintName] = useState("");
    const [canvasFields, setCanvasFields] = useState([]);
    const [selectedFieldId, setSelectedFieldId] = useState(null);

    const [fieldSettings, setFieldSettings] = useState({
        label: "",
        x: 0,
        y: 0,
    });

    useEffect(() => {
        const blueprints =
            JSON.parse(localStorage.getItem("blueprints")) || [];

        const blueprintToEdit = blueprints.find(bp => bp.id === id);

        if (!blueprintToEdit) {
            alert("Blueprint not found");
            navigate("/blueprint");
            return;
        }

        setBlueprintName(blueprintToEdit.name);
        setCanvasFields(blueprintToEdit.fields);
    }, [id, navigate]);

    const addField = (type) => {
        const newField = {
            id: Date.now(),
            type,
            label: `${type} field`,
            x: 0,
            y: 0,
        };

        setCanvasFields(prev => [...prev, newField]);
        setSelectedFieldId(newField.id);

        setFieldSettings({
            label: newField.label,
            x: 0,
            y: 0,
        });
    };

    const selectField = (field) => {
        setSelectedFieldId(field.id);
        setFieldSettings({
            label: field.label,
            x: field.x,
            y: field.y,
        });
    };

    const saveFieldSettings = () => {
        setCanvasFields(prev =>
            prev.map(field =>
                field.id === selectedFieldId
                    ? { ...field, ...fieldSettings }
                    : field
            )
        );
    };

    const saveBlueprint = () => {
        const blueprints =
            JSON.parse(localStorage.getItem("blueprints")) || [];

        const updatedBlueprints = blueprints.map(bp =>
            bp.id === id
                ? { ...bp, name: blueprintName, fields: canvasFields }
                : bp
        );

        localStorage.setItem(
            "blueprints",
            JSON.stringify(updatedBlueprints)
        );

        alert("Blueprint updated successfully");
        navigate("/blueprint");
    };



    return (
        <div>
            <div>
                <div>
                    <div className={styles}>
                        <label htmlFor="">Blue printname: </label>
                        <input type="text" value={blueprintName}
                            onChange={(e) => setBlueprintName(e.target.value)} />
                    </div>
                    <button onClick={saveBlueprint}>Save blueprint</button>
                </div>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <h3>Field Types</h3>
                            <button onClick={() => addField("text")}>Text</button>
                            <button onClick={() => addField("date")}>Date</button>
                            <button onClick={() => addField("signature")}>Signature</button>
                            <button onClick={() => addField("checkbox")}>Checkbox</button>
                        </div>
                        <div className='col-lg-4'>
                            <h3>Field Settings</h3>
                            <div>
                                <label htmlFor="">Label</label>
                                <input type="text" value={fieldSettings.label}
                                    onChange={(e) =>
                                        setFieldSettings({ ...fieldSettings, label: e.target.value })
                                    } />
                            </div>
                            {/* <div>
                                <label htmlFor="">Type</label>
                                <span>Text</span>
                            </div> */}
                            <div>
                                <label htmlFor="">X</label>
                                <input
                                    type="number"
                                    value={fieldSettings.x}
                                    onChange={(e) =>
                                        setFieldSettings({ ...fieldSettings, x: Number(e.target.value) })
                                    }
                                />
                            </div>
                            <div>
                                <label htmlFor="">Y</label>
                                <input
                                    type="number"
                                    value={fieldSettings.y}
                                    onChange={(e) =>
                                        setFieldSettings({ ...fieldSettings, y: Number(e.target.value) })
                                    }
                                />
                            </div>
                            <button onClick={saveFieldSettings}>save</button>
                        </div>
                        <div className='col-lg-4'>
                            <h3>Canvas</h3>
                            <div className={styles.canvas_area}>
                                {canvasFields.map(field => (
                                    <div
                                        key={field.id}
                                        onClick={() => selectField(field)}
                                        style={{
                                            position: "absolute",
                                            left: field.x,
                                            top: field.y,
                                            border: field.id === selectedFieldId ? "1px solid blue" : "none",
                                            cursor: "pointer",
                                            padding: "4px"
                                        }}
                                    >
                                        <label>{field.label}</label>
                                        {field.type === "text" && <input />}
                                        {field.type === "date" && <input type="date" />}
                                        {field.type === "checkbox" && <input type="checkbox" />}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditBlueprint