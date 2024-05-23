import { ButtonHTMLAttributes, ReactNode } from "react";


    export enum TypeButton{
        SMALL = "small",
        BIG  = "big"
     }
    
   export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
         children:ReactNode
         typeButton?:TypeButton
    } 