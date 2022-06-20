import React from 'react';

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light w-50 m-auto mb-3">
      <div className="container-fluid">
        <a className="navbar-brand m-auto" href="../../public/index.html">
          Total Items Selected{' '}
          <span className="mx-3 text-danger border p-2 rounded">{props.totalCounters}</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
