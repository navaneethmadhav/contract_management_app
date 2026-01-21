import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const BlueprintOverview = () => {

  const [blueprints, setBlueprints] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("blueprints")) || [];
    setBlueprints(stored);
  }, []);

  return (
    <div>
      <Link to={'new'} style={{ float: 'right', marginRight: '10px' }}>Create blueprint</Link>

      <div className="container">
        <h2>Blueprints</h2>

        {blueprints.length === 0 ? (
          <p>No blueprints created yet</p>
        ) : (
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Blueprint Name</th>
                <th>Created On</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {blueprints.map((bp, index) => (
                <tr key={bp.id}>
                  <td>{index + 1}</td> 
                  <td>{bp.name}</td>
                  <td>{new Date(bp.createdAt).toLocaleDateString()}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-info me-2"
                      onClick={() => navigate(`/blueprint/view/${bp.id}`)}
                    >
                      View
                    </button>

                    <button
                      className="btn btn-sm btn-warning"
                      onClick={() => navigate(`/blueprint/edit/${bp.id}`)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

export default BlueprintOverview