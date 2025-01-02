import ContentPreview from '../ContentPreview/ContentPreview';
import ContentList from '../ContentList/ContentList';
import './ContentPane.css';
import * as api from '../../utils/callAPI';
import React, { ReactNode } from 'react';
import { Appointment } from '../../models/appointments';
import { AppointmentView } from '../AppointmentView/AppointmentView';

export interface ContentPaneProps {
    showTable: boolean;
    tableData: any[];
    selectedResource: ContentViewThing;
};

export interface ContentViewThing {
  endpoint: string;
  contentView: React.FC;
}

export const ContentPane: React.FC<ContentPaneProps> = ({ showTable, tableData, selectedResource }) => {

    const [previewContent, setPreviewContent] = React.useState<ReactNode>(undefined);

    const handleRowClick = (rowData: any) => {
        api.callAPI(api.GET, selectedResource.endpoint+'/'+rowData?.id, (data) => {
            const appointment: Appointment = data;

            setPreviewContent(<AppointmentView appointment={appointment} />);
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