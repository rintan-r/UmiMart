import Dropdown from './Dropdown';
import { useState, useEffect } from 'react';

function Filter({ viewState, setViewState }) {
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setViewState("filter-only");
        } else if (viewState === "filter-only") {
            setViewState("default");
        }
    }, [isOpen]);

    return (
        <div>
            <Dropdown
                label="Filter"
                isOpen={isOpen}
                onToggle={setOpen}
                variant="default"
            >
                {/* Dropdown Content */}
                <div>
                    <p>test</p>
                </div>

            </Dropdown>
        </div>
    )
}

export default Filter;