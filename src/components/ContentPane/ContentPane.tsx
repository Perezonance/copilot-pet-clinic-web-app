import ContentPreview from '../ContentPreview/ContentPreview';
import ContentList from '../ContentList/ContentList';
import './ContentPane.css';
import { callAPI } from '../../utils/callAPI';
import React from 'react';
// import constructContent from '../../contentConstructor';

export interface ContentPaneProps {
    showTable: boolean;
    tableData: any[];
    selectedResource: string;
};

const ContentPane: React.FC<ContentPaneProps> = ({ showTable, tableData, selectedResource }) => {

    const [previewContent, setPreviewContent] = React.useState(undefined);

    const handleRowClick = (rowData: any) => {
        callAPI(selectedResource+'/'+rowData?.id, (data) => {
            setPreviewContent(data);
        });

    };
    
    return (
        <div className="ContentPane">
            <div className="ContentPane-left">
                <ContentPreview content={previewContent}/>
            </div>
            <div className="ContentPane-right">
                <ContentList showTable={showTable} tableData={tableData} onRowClick={handleRowClick}/>
            </div>
        </div>
    );
};

export default ContentPane;