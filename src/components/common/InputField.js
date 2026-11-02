import React from "react";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";

function InputField(props) {
	const { name, control, label, rules, ...restProps } = props;
  return (
    <Controller
      name={name}
      control={control}
			rules={rules}
      render={({
        field: { onChange, value },
        fieldState: { error }
      }) => (
        <TextField
          helperText={error ? error.message : ""}
          size="small"
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          variant="outlined"
					{...restProps}
        />
      )}
    />
  );
}

export default InputField;
