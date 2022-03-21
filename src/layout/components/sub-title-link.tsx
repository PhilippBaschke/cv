import { Link } from './link';
import type ReactPDF from '@react-pdf/renderer';
import React from 'react';

const SubTitleLink = (props: ReactPDF.LinkProps) => <Link quiet {...props} />;

export { SubTitleLink };
