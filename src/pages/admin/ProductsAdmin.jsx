import React, { useEffect, useState } from 'react';
import { Button, Form, Input, InputNumber, Modal, Table, Tag, message } from 'antd';
import axios from 'axios';

const ProductsAdmin = () => {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState(null);

  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:3000/products');
      setData(res.data);
    } catch (err) {
      message.error('Lỗi khi tải sản phẩm');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleEdit = (record) => {
    form.setFieldsValue({
      ...record,
      tags: record.tags?.join(', '),
    });
    setIsModalOpen(true);
    setEditingKey(record.id);
  };

  const handleDelete = async (id) => {
    Modal.confirm({
      title: 'Xác nhận xóa',
      content: 'Bạn có chắc muốn xóa sản phẩm này?',
      onOk: async () => {
        try {
          await axios.delete(`http://localhost:3000/products/${id}`);
          fetchData();
          message.success('Đã xóa sản phẩm');
        } catch (err) {
          message.error('Xóa thất bại');
        }
      },
    });
  };

  const handleView = (record) => {
    Modal.info({
      title: `Chi tiết: ${record.ten_san_pham}`,
      content: (
        <div>
          <p><strong>Giá:</strong> {record.gia.toLocaleString()} đ</p>
          <p><strong>Giá KM:</strong> {record.gia_khuyen_mai?.toLocaleString()} đ</p>
          <p><strong>Số lượng:</strong> {record.so_luong}</p>
          <p><strong>Đã bán:</strong> {record.so_luong_da_ban}</p>
          <p><strong>Mô tả:</strong> {record.mo_ta}</p>
          <p><strong>Danh mục ID:</strong> {record.danh_muc_id}</p>
          <p><strong>Tags:</strong> {record.tags?.join(', ')}</p>
          <img src={record.hinh_anh} alt="Hình ảnh" width={100} />
        </div>
      )
    });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
    setEditingKey(null);
  };

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      const product = {
        ...values,
        so_luong_da_ban: editingKey
          ? data.find((p) => p.id === editingKey)?.so_luong_da_ban || 0
          : 0,
        tags: values.tags ? values.tags.split(',').map((t) => t.trim()) : [],
      };

      if (editingKey) {
        await axios.put(`http://localhost:3000/products/${editingKey}`, product);
        message.success('Cập nhật thành công');
      } else {
        await axios.post('http://localhost:3000/products', product);
        message.success('Thêm mới thành công');
      }

      fetchData();
      form.resetFields();
      setIsModalOpen(false);
      setEditingKey(null);
    } catch (err) {
      message.error('Lỗi xử lý sản phẩm');
    }
  };

  const columns = [
    {
      title: 'Tên',
      dataIndex: 'ten_san_pham',
      key: 'ten_san_pham',
    },
    {
      title: 'Giá',
      dataIndex: 'gia',
      key: 'gia',
      render: (value) => `${value?.toLocaleString()} đ`,
    },
    {
      title: 'Giá KM',
      dataIndex: 'gia_khuyen_mai',
      key: 'gia_khuyen_mai',
      render: (value) => (value ? `${value.toLocaleString()} đ` : '—'),
    },
    {
      title: 'Số lượng',
      dataIndex: 'so_luong',
      key: 'so_luong',
    },
    {
      title: 'Đã bán',
      dataIndex: 'so_luong_da_ban',
      key: 'so_luong_da_ban',
    },
    {
      title: 'Hình ảnh',
      dataIndex: 'hinh_anh',
      key: 'hinh_anh',
      render: (url) => (url ? <img src={url} alt="img" width={50} /> : '—'),
    },
    {
      title: 'Mô tả',
      dataIndex: 'mo_ta',
      key: 'mo_ta',
      render: (text) => <span>{text?.slice(0, 30)}...</span>,
    },
    {
      title: 'Danh mục ID',
      dataIndex: 'danh_muc_id',
      key: 'danh_muc_id',
    },
    {
      title: 'Tags',
      dataIndex: 'tags',
      key: 'tags',
      render: (tags) =>
        tags?.map((tag) => (
          <Tag color={tag.length > 5 ? 'geekblue' : 'green'} key={tag}>
            {tag.toUpperCase()}
          </Tag>
        )),
    },
    {
      title: 'Hành động',
      key: 'action',
      render: (_, record) => (
        <div className="flex gap-2">
          <Button type="link" onClick={() => handleEdit(record)}>Sửa</Button>
          <Button type="link" danger onClick={() => handleDelete(record.id)}>Xóa</Button>
          <Button type="link" onClick={() => handleView(record)}>Xem</Button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div style={{ marginBottom: 16 }} className="flex justify-between">
        <h1 className="text-3xl">Quản lý sản phẩm</h1>
        <Button type="primary" onClick={showModal}>
          Thêm sản phẩm
        </Button>
      </div>

      <Modal
        title={editingKey ? "Sửa sản phẩm" : "Thêm sản phẩm mới"}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={editingKey ? "Cập nhật" : "Thêm"}
        cancelText="Hủy"
      >
        <Form form={form} layout="vertical">
          <Form.Item label="Tên sản phẩm" name="ten_san_pham" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item label="Giá" name="gia" rules={[{ required: true }]}>
            <InputNumber style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item label="Giá khuyến mãi" name="gia_khuyen_mai">
            <InputNumber style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item label="Số lượng" name="so_luong" rules={[{ required: true }]}>
            <InputNumber style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item label="Hình ảnh (URL)" name="hinh_anh">
            <Input placeholder="https://..." />
          </Form.Item>

          <Form.Item label="Mô tả" name="mo_ta">
            <Input.TextArea rows={3} />
          </Form.Item>

          <Form.Item label="ID danh mục" name="danh_muc_id">
            <InputNumber style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item label="Tags (phân cách bởi dấu phẩy)" name="tags">
            <Input placeholder="ví dụ: hot, mới, giảm giá" />
          </Form.Item>
        </Form>
      </Modal>

      <Table rowKey="id" dataSource={data} columns={columns} />
    </div>
  );
};

export default ProductsAdmin;
