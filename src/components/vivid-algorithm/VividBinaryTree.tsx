import * as React from 'react';
import {BinaryTreeNode} from 'data-structure-typed';
import styles from './styles';
import {SVGHeight, SVGWidth} from '../../types';

const VividBinaryTreeRecursive: React.FC<{
    node: BinaryTreeNode,
    level: number,
    index: number,
    familyLength: number,
    parentX?: number,
    parentY?: number,
    maxHeight?: number,
    relatedBinaryNode?: BinaryTreeNode
}> = ({
          node,
          level = 1,
          index = 0,
          familyLength = 1,
          parentX,
          parentY,
          maxHeight, relatedBinaryNode
      }) => {
    if (!node) {
        return null;
    }
    const {
        textFillColor, textFillActiveColor, circleFillColor, circleFillActiveColor,
        lineStrokeColor, circleStrokeColor, treePanelWidth, lineStrokeWidth, strokeWidth,
        levelOffset, treeNodeR, nodeSpace, fontSize, fontOffsetY,
    } = styles;
    let space = 0;
    let offsetX;
    let offsetY;
    const levelNodeSpace = nodeSpace * Math.pow(2, (maxHeight || 5) - level);
    if (level === 1) {
        space = treePanelWidth / 2;
        offsetX = space - treeNodeR;
        offsetY = (level - 1) * levelOffset + treeNodeR + strokeWidth;
    } else {
        if (parentX !== undefined) {
            offsetX = parentX - ((index < 1) ? levelNodeSpace : -levelNodeSpace);
            offsetY = (level - 1) * levelOffset + treeNodeR + strokeWidth;
        }
    }

    const isActive = node.id === relatedBinaryNode?.id;
    return (
        <g key={node.id}>
            {
                level > 1
                    ? <line x1={parentX} y1={parentY} x2={offsetX} y2={offsetY} stroke={lineStrokeColor}
                            strokeWidth={lineStrokeWidth}/>
                    : null
            }
            {
                node.left
                    ?
                    <VividBinaryTreeRecursive node={node.left} level={level + 1} index={0}
                                              familyLength={2} parentX={offsetX} parentY={offsetY}
                                              maxHeight={maxHeight} relatedBinaryNode={relatedBinaryNode}/>
                    : null
            }
            {
                node.right
                    ?
                    <VividBinaryTreeRecursive node={node.right} level={level + 1} index={1}
                                              familyLength={2} parentX={offsetX} parentY={offsetY}
                                              maxHeight={maxHeight}/>
                    : null
            }
            <circle style={{cursor: 'pointer'}} stroke={circleStrokeColor} r={treeNodeR} cx={offsetX} cy={offsetY}
                    fill={isActive ? circleFillActiveColor : circleFillColor}
                    onClick={(e) => {
                        console.info(node);
                    }}
            />
            {
                offsetY !== undefined
                    ? <text
                        fill="none"
                        stroke={isActive ? textFillActiveColor : textFillColor}
                        fontSize={fontSize}
                        fontWeight={1}
                        x={offsetX}
                        y={offsetY + fontOffsetY}
                        textAnchor="middle"
                        onClick={(e) => {
                            console.info(node);

                        }}
                    >
                        {/*<tspan x={offsetX} y={offsetY + fontOffsetY}>{node.id}</tspan>*/}
                        <tspan x={offsetX} y={offsetY + fontOffsetY}>{node.id}</tspan>
                        {/*<tspan x={offsetX} y={offsetY + fontOffsetY + fontSize + 2}>{node.val !== null ? node.val : 'null'}</tspan>*/}
                        {/*<tspan x={offsetX} y={offsetY + fontOffsetY + 2 * fontSize + 4}>{'q: ' + node.count}</tspan>*/}
                        {/*<tspan x={offsetX}*/}
                        {/*       y={offsetY + fontOffsetY + 3 * fontSize + 6}>{'s:' + node.allLesserSum}</tspan>*/}

                    </text>
                    : null
            }
        </g>
    );
};

export const VividBinaryTree: React.FC<{
    node: BinaryTreeNode | null, maxHeight?: number,
    svgHeight?: SVGHeight,
    svgWidth?: SVGWidth,
    relatedBinaryNode?: BinaryTreeNode
}> = ({node, maxHeight, svgHeight, svgWidth, relatedBinaryNode}) => {
    return (
        <svg width={svgWidth ?? '100%'} height={svgHeight ?? 480}>
            {node
                ? <VividBinaryTreeRecursive node={node} level={1} index={0} familyLength={1}
                                            maxHeight={maxHeight} relatedBinaryNode={relatedBinaryNode}/>
                : null
            }
        </svg>

    );
};
