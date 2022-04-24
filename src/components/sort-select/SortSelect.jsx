import './sort-select.scss';

const SortSelect = props => {
    return (
        <div className="form-group">
            <label>Sort by</label>
            <select name="" class="form-control">
                <option value="0">Newest to oldest</option>
                <option value="0">Oldest to newest</option>
            </select>
        </div>
    )
}

export default SortSelect;