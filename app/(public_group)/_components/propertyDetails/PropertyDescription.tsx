import React from "react";

const PropertyDescription = ({ description }: { description: string }) => {
  return (
    <>
      <p className="leading-8 text-muted-foreground">{description}</p>
    </>
  );
};

export default PropertyDescription;
