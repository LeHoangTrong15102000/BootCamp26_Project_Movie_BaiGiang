import React from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
  margin-bottom: 0.5rem;
  display: inline-block;
`;

const Input = styled.input`
  display: inline-block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

// Thì đây là component do mình tạo ra để chứa được đóng giao diện của mình
const InputText = ({ label, name, register, errors, className, validations, ...props }) => {
  return (
    <div className="flex">
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} {...props} {...register(name, validations)} />
      {/* Bên kia nếu errors.firstName là true thì nó sẽ hiện thị lỗi */}
      {errors && <span className="text-red-500">{errors.message}</span>}
    </div>
  );
};

export default InputText;
