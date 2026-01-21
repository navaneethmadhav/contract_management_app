import React, { useEffect, useState } from 'react'

const DashboardOverview = () => {

    const [blueprintCount, setBlueprintCount] = useState(0)
    const [contractCount, setContractCount] = useState(0)

    useEffect(() => {
        const blueprints = JSON.parse(localStorage.getItem('blueprints')) || []
        const contracts = JSON.parse(localStorage.getItem('contracts')) || []

        setBlueprintCount(blueprints.length)
        setContractCount(contracts.length)
    }, [])

    return (
        <div>
            <div className="container mt-4">
                <div className="row g-4">

                    <div className="col-lg-4 col-md-6">
                        <div className="card shadow-sm">
                            <div className="card-body text-center">
                                <h5 className="card-title">Total Blueprints</h5>
                                <h2 className="fw-bold">{blueprintCount}</h2>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="card shadow-sm">
                            <div className="card-body text-center">
                                <h5 className="card-title">Total Contracts</h5>
                                <h2 className="fw-bold">{contractCount}</h2>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DashboardOverview