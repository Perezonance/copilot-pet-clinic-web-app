import Table from '../../Table/Table';
import './ContentList.css';

interface ContentListProps {
    showTable: boolean;
    tableData: any[];
    onRowClick: (rowData: any) => void;
}

const ContentList: React.FC<ContentListProps> = ({showTable, tableData, onRowClick}) => {
    return (
        <div className="ContentList">
            {showTable && <Table data={tableData} onRowClick={onRowClick} />}
        </div>
    )
};

export default ContentList;