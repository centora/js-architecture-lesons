import { ACTIVE, ALL, COMPLETED } from '../../constants';
import FilterButton from '../FilterButton/FilterButton';

interface IFooter {
    activeTodosNumber: number;
    onFilter: (filter: string) => void;
    activeFilter: string;
}

const Footer = ({activeTodosNumber, onFilter, activeFilter}: IFooter) => {
    return(
        <footer className="todo-footer">
            <div className="todo-count">
                {activeTodosNumber} items left
            </div>
            <div className="todo-filter">
                <FilterButton 
                    filter='all'
                    text='All'
                    onFilter={onFilter}
                    isActive={activeFilter === ALL}
                />
                <FilterButton 
                    filter='active'
                    text='Active'
                    onFilter={onFilter}
                    isActive={activeFilter === ACTIVE}
                />
                <FilterButton 
                    filter='completed'
                    text='Completed'
                    onFilter={onFilter}
                    isActive={activeFilter === COMPLETED}
                />
            </div>
        </footer>
    )
}


export default Footer;