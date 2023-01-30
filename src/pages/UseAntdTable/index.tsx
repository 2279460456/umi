import { ProTable, ProColumns } from '@ant-design/pro-components';

const useAntdTable: React.FC = () => {
  const columns: ProColumns<useAntdTable.dataResItem>[] = [
    {
      title: '姓名',
      dataIndex: 'name',
      hideInSearch: true,
    },
    {
      title: '学号',
      dataIndex: 'studyNumber',
      hideInSearch: true,
    },
    {
      title: '性别',
      dataIndex: 'sex',
      hideInSearch: true,
    },
    {
      title: '电话',
      dataIndex: 'phone',
      hideInSearch: true,
    },
  ];

  return (
    <ProTable
      columns={columns}
      // search={{optionRender:false}}
    ></ProTable>
  );
};

export default useAntdTable;
