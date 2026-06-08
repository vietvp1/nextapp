'use client'
const A = () => {
  return (
    <div>
      <button
        onClick={() => {
          throw new Error("test error");
        }}
      >
        oke
      </button>
    </div>
  );
};

export default A;
