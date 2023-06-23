'use client';

//installeer library materialui: 'npm install @mui/material @emotion/react @emotion/styled'

import { Button, Menu, MenuItem } from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react';

interface DropdownMenuProps {
  options: { value: number; label: string;  path: string }[];
  buttonName: string;
}

interface DropdownMenuState {
  anchorEl: null | HTMLElement;
}

class DropdownMenu extends React.Component<
  DropdownMenuProps,
  DropdownMenuState
> {
  constructor(props: DropdownMenuProps) {
    super(props);
    this.state = {
      anchorEl: null,
    };
  }

  handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const { options, buttonName } = this.props;

    return (
      <div>
        <Button color='inherit' onClick={this.handleClick}>{buttonName}</Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {options.map((option) => (
            <MenuItem key={option.value} onClick={this.handleClose}>
             <Link href={option.path}>{option.label}</Link>
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

export default DropdownMenu;