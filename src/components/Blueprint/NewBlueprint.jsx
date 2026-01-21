import React, { useState } from 'react'
import styles from './NewBlueprint.module.css'
import { useNavigate } from 'react-router-dom';

const NewBlueprint = () => {

    let location = useNavigate();

    const [canvasFields, setCanvasFields] = useState([]);
    const [selectedFieldId, setSelectedFieldId] = useState(null);
    const [blueprintName, setBlueprintName] = useState("");

    const [fieldSettings, setFieldSettings] = useState({
        label: "",
        x: 0,
        y: 0,
    });

    const addField = (type) => {
        const newField = {
            id: Date.now(),
            type,
            label: `${type} field`,
            x: 0,
            y: 0,
        };

        setCanvasFields([...canvasFields, newField]);
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
        setCanvasFields((prev) =>
            prev.map((field) =>
                field.id === selectedFieldId
                    ? { ...field, ...fieldSettings }
                    : field
            )
        );
    };

    const saveBlueprint = () => {
        if (!blueprintName.trim()) {
            alert("Blueprint name is required");
            return;
        }

        if (canvasFields.length === 0) {
            alert("Add at least one field");
            return;
        }

        const blueprint = {
            id: `bp_${Date.now()}`,
            name: blueprintName,
            createdAt: new Date().toISOString(),
            fields: canvasFields,
        };

        const existingBlueprints =
            JSON.parse(localStorage.getItem("blueprints")) || [];

        localStorage.setItem(
            "blueprints",
            JSON.stringify([...existingBlueprints, blueprint])
        );

        alert("Blueprint saved successfully!");
        location('/blueprint');
    };

    return (
        <div>
            <div>
                <div className={styles}>
                    <label htmlFor="">Blue printname: </label>
                    <input type="text" value={blueprintName}
                        onChange={(e) => setBlueprintName(e.target.value)}
                        placeholder="Blueprint name" />
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
                            {canvasFields.map((field) => (
                                <div
                                    key={field.id}
                                    onClick={() => selectField(field)}
                                    style={{
                                        position: "absolute",
                                        left: field.x,
                                        top: field.y,
                                        border: field.id === selectedFieldId ? "1px solid blue" : "none",
                                        padding: "5px",
                                        cursor: "pointer",
                                    }}
                                >
                                    <label>{field.label}</label>
                                    {field.type === "text" && <input type="text" />}
                                    {field.type === "date" && <input type="date" />}
                                    {field.type === "checkbox" && <input type="checkbox" />}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewBlueprint