import React, { useEffect } from "react";
import * as s from "./styles";

import { useBoolean } from "../../hooks/useBoolean";
import { autoUpdate, useFloating } from "./use-floating";
import { useOnClickOutside } from "./use-click-outside";
import NutIcon from "./nut-icon";

type Alignment = 'start' | 'end';
type Side = 'top' | 'right' | 'bottom' | 'left';
type AlignedPlacement = `${Side}-${Alignment}`;
type Placement = Side | AlignedPlacement;

interface IBaseDropdown {
  activator?: React.ReactNode;
  children: React.ReactNode;
  placement?: Placement;
  styleContainer?: React.CSSProperties;
}

const BaseDropdown = ({ activator, children, placement = "bottom-end", styleContainer }: IBaseDropdown) => {
  const { x, y, reference, floating, strategy, update, refs } = useFloating({
    placement,
  });
  const menu = useBoolean();

  useOnClickOutside(refs.reference, () => menu.off());

  const handleClose = () => menu.off();
  const renderedChildren = typeof children === "function" ? children(handleClose) : children;

  useEffect(() => {
    if (!refs.reference.current || !refs.floating.current) return;
    return autoUpdate(refs.reference.current, refs.floating.current, update);
  }, [menu.active, update]);

  return (
    <div ref={reference}>
      <s.Activator style={styleContainer} onClick={menu.toggle}>
        {activator || <NutIcon size={20} />}
      </s.Activator>
      {menu.active && (
        <div
          ref={floating}
          style={{
            position: strategy,
            top: y ?? 0,
            left: x ?? 0,
            zIndex: 2,
          }}
        >
          {renderedChildren}
        </div>
      )}
    </div>
  );
};

export default BaseDropdown;
