interface IFilterButton {
    filter: string 
    text: string
    onFilter: (filter: string) => void;
    isActive: boolean;
}
const FilterButton = ({filter, text, onFilter, isActive }:IFilterButton) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const filter = e.currentTarget.dataset.filter || 'all';
        onFilter(filter);
    }
    return(
        <button 
            type="button"
            className={`filter-btn ${isActive ? 'active' : ''}`}
            data-filter={filter}
            onClick={handleClick}>
            {text}
        </button>
    )
}

export default FilterButton;