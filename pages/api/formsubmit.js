import React from "react";
import { gql } from "@apollo/client";

export const FORM_SUBMIT = gql`
    mutation CreateAccount {
      create_account(
        name: "Jane Doe",
        ifscs: ["ICIC0001008", "HDFC0001907"]
      )
    }
  }
`;
