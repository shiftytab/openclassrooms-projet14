import React, { useState } from 'react'

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { EmployeePropsType } from '@/types/EmployeeType';

type ComponentPropsType = {
	data: Array<EmployeePropsType>
	columns: Array<{[key: string]: string}>
}

export default function index({data, columns} : ComponentPropsType) {

	const [search, setSearch] = useState<string>("");

	const RenderTableHeader = React.useCallback(() => {
		return (
			<InputText placeholder="Search" onChange={(e) => setSearch(e.currentTarget.value)}/>
		)
	}, [search]);

	return (
		<DataTable 
			tableStyle={{ minWidth: '50rem', height:"100%" }}
			value={data.filter((i) => i.firstName.toLowerCase().includes(search.toLowerCase()))}
			paginator
			rows={10} 
			rowsPerPageOptions={[10, 25, 50, 100]}
			emptyMessage="No data available in table"
			globalFilterFields={['fistName']}
			showGridlines
			header={RenderTableHeader}
		>
			{
				(columns || []).map((column, index) => {
					return (
						<Column 
							key={index} 
							field={column.id} 
							header={column.label} 
							sortable
						/>
					)
				})
			}
		</DataTable>

		
	)
}