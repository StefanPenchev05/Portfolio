import React from "react";

interface AvatarProps{
    avatar: string;
    className?:string;
}


const Avatar: React.FC<AvatarProps> = ({avatar, className}) => {
  return (
    <div className={`rounded-full overflow-hidden w-16 h-16 border-2 solid border-gray-700 ${className}`}>
      <img src={avatar} className="w-full h-full object-cover" />
    </div>
  );
};

export default Avatar;
