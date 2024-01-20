// SellerCard.js
import React, { useState } from "react";

const SellerProfile = (props) => {
  const [sellerName, setSellerName] = useState("Rohan Vaidya");
  const [gstNumber, setGstNumber] = useState("1235jl12j32n");
  const [proprietor, setProprietor] = useState("Rohan Vaidya");
  const [address, setAddress] = useState("Sai Nagar Pune");

  return (
    <div className="max-w-md mx-auto bg-white shadow-md overflow-hidden rounded-md border mt-4">
      <div className="px-4 py-5 sm:p-6">
        <h4 className="text-lg font-medium text-gray-900">Seller Details</h4>
        <h3 className="text-lg font-medium text-gray-900">{props.supplier}</h3>
        <div className="mt-4">
          <dl>
            <div className="sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">GST Number</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {props.GST}
              </dd>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">Proprietor</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {props.UserName}
              </dd>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">Address</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {props.manufacturingplace}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default SellerProfile;
