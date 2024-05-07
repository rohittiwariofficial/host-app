import React from "react";
import '../style.css';

interface FilterProps {
    filter: 'all' | 'active' | 'completed';
    setFilter: (filter: 'all' | 'active' | 'completed') => void
};

const Filter: React.FC<FilterProps> = ({ filter, setFilter }) => {
    return (
        <div>
            <span className="mr-2">Filter:</span>
            <select name="filter" id="filter" value={filter} onChange={e => setFilter(e.target.value as 'all' | 'active' | 'completed')} className="p-2 border rounded focus:outline-none focus:ring focus:border-blue-300" data-testid="filter-select">
                <option value="all">All</option>
                <option value="active">Active</option>
                <option value="completed">Completed</option>
            </select>
        </div>
    )
}

export default Filter;