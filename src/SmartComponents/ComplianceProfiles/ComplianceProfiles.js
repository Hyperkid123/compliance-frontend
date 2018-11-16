import React from 'react';
import { Grid, GridItem } from '@patternfly/react-core';
import ComplianceProfilesTable from '../ComplianceProfilesTable/ComplianceProfilesTable';

const ComplianceProfiles = () => {
    return (
        <React.Fragment>
            <Grid gutter={'sm'}>
                <GridItem span={12}>
                    <ComplianceProfilesTable />
                </GridItem>
            </Grid>
        </React.Fragment>
    );
};

export default ComplianceProfiles;
