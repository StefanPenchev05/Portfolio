import React from 'react';

interface TextFieldProps {
  title: string;
  fieldType: string;
  text: string;
  setText: (value: string) => void;
  textArea?: boolean;
  fullWidth?: boolean;
}

const TextField: React.FC<TextFieldProps> = ({
  title,
  fieldType,
  text,
  setText,
  textArea = false,
  fullWidth = true,
}) => {



  return (
    <div
      className={`flex flex-col space-y-4 ${fullWidth ? "w-full" : `w-full md:w-1/2`} p-2`}
    >
      <label className="text-[#a0a8b3] text-sm font-medium font-secondary uppercase">
        {title}
      </label>
      {textArea ? (
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={`Enter ${title.toLowerCase()}`}
          className="bg-[#191b1e] rounded-md h-40 p-3 text-light-text focus:outline-none focus:ring-2 focus:ring-[#61DAFB] transition duration-200 ease-in-out"
        />
      ) : (
        <input
          type={fieldType}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={`Enter ${title.toLowerCase()}`}
          className="bg-[#191b1e] w-full rounded-md h-14 p-3 text-light-text focus:outline-none focus:ring-2 focus:ring-[#61DAFB] transition duration-200 ease-in-out"
        />
      )}
    </div>
  );
};

export default TextField;