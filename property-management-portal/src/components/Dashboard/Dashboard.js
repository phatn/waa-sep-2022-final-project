import React, { useEffect } from 'react';
import './Dashboard.scss';
import useRole from 'hooks/useRole';
import DashboardAdmin from 'components/Dashboard/DashboardAdmin';
import DashboardOwner from 'components/Dashboard/DashboardOwner';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const role = useRole();

    useEffect(() => {
        if (!role.isOwner && !role.isAdmin) {
            navigate('/');
        }
    }, []);

    return (
        <div className="dashboard">
            {role.isAdmin && <DashboardAdmin />}
            {role.isOwner && <DashboardOwner />}
        </div>
    );
};

export default Dashboard;