import React, { useState } from 'react';
import { Form } from 'react-router-dom';

interface SearchProps {
  initialValue: string;
}

function Search({ initialValue }: SearchProps) {
  const [value, setValue] = useState(initialValue);
  return (
    <div>
      <Form method="get" action="/">
        <input
          type="text"
          name="title"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button type="submit" hidden />
      </Form>
    </div>
  );
}

export default Search;
