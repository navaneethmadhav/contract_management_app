import React, { useEffect, useState } from 'react'
import styles from './ContractOverview.module.css'
import { useNavigate } from 'react-router-dom'

const ContractOverview = () => {

    const navigate = useNavigate()

    const [blueprints, setBlueprints] = useState([])
    const [contracts, setContracts] = useState([])

    const [contractName, setContractName] = useState('')
    const [selectedBlueprint, setSelectedBlueprint] = useState('')

    useEffect(() => {
        const bp = JSON.parse(localStorage.getItem('blueprints')) || []
        const ct = JSON.parse(localStorage.getItem('contracts')) || []

        setBlueprints(bp)
        setContracts(ct)
    }, [])

    const handleSaveContract = () => {
        if (!contractName || !selectedBlueprint) return alert("Fill all fields")

        const blueprint = blueprints.find(b => b.id === selectedBlueprint)

        const newContract = {
            id: `ct_${Date.now()}`,
            name: contractName,
            blueprintId: blueprint.id,
            blueprintName: blueprint.name,
            status: 'created'
        }

        const updatedContracts = [...contracts, newContract]
        setContracts(updatedContracts)

        localStorage.setItem('contracts', JSON.stringify(updatedContracts))

        setContractName('')
        setSelectedBlueprint('')
    }


    return (
        <div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">New Contract</button>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Create New Contract</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className={styles.form_group}>
                                <div className={styles.form_field}>
                                    <label htmlFor="">Contract Name</label>
                                    <input type="text" value={contractName} onChange={(e) => setContractName(e.target.value)} />
                                </div>
                                <div className={styles.form_field}>
                                    <label htmlFor="">Select blueprint</label>
                                    <select name="" id="" value={selectedBlueprint} onChange={(e) => setSelectedBlueprint(e.target.value)}>
                                        <option value="">Select blueprint</option>
                                        {blueprints.map(bp => (
                                            <option key={bp.id} value={bp.id}>
                                                {bp.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={handleSaveContract} >Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.table_container}>
                <table className="table table-bordered mt-4">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Contract Name</th>
                            <th>Blueprint</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contracts.map((ct, index) => (
                            <tr key={ct.id}>
                                <td>{index + 1}</td>
                                <td>{ct.name}</td>
                                <td>{ct.blueprintName}</td>
                                <td>
                                    <span className={`badge ${ct.status === 'approved' ? 'bg-success' :
                                            ct.status === 'rejected' ? 'bg-danger' : 'bg-warning'}`}>
                                        {ct.status}
                                    </span>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-sm btn-primary"
                                        onClick={() => navigate(`/contract/${ct.id}`)}
                                    >
                                        Details
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default ContractOverview