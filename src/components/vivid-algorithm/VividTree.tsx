import * as React from 'react';
import {AbstractEdge, AbstractVertex, TreeNode} from 'data-structure-typed';
import styles from './styles';
import {SVGHeight, SVGWidth} from '../../types';

const VividTreeRecursive: React.FC<{
    node: TreeNode<any>,
    level: number,
    index: number,
    familyLength: number,
    parentX?: number,
    parentY?: number,
    maxHeight?: number,
    relatedNode?: TreeNode
}> = ({
          node,
          level = 1,
          index = 0,
          familyLength = 1,
          parentX,
          parentY,
          maxHeight,
          relatedNode
      }) => {
    if (!node) {
        return null;
    }
    // const firstRender = useMemo(
    //     () =>console.log('!!!first Render'),
    //     []
    // );
    let space = 0;
    let offsetX = 0;
    let offsetY = 0;
    const handleEdgeClick = (edge: AbstractEdge) => {
        console.log(edge);
    }

    const handleVertexClick = (vertex: AbstractVertex) => {
        console.log(vertex);
    }

    const handleNodeClick = (node: TreeNode) => {
        console.log(node);
    }
    const {
        textFillColor,
        textFillActiveColor,
        circleFillColor,
        circleFillActiveColor,
        rectStrokeColor,
        arrowColor,
        lineStrokeColor,
        circleStrokeColor,
        matrixPanelWidth,
        matrixRectStrokeWidth,
        arrowCut,
        treePanelWidth,
        lineStrokeWidth,
        strokeWidth,
        levelOffset,
        treeNodeR,
        vertexDistance,
        nodeSpace,
        fontSize,
        fontOffsetY,
        vertexR,
    } = styles;
    const levelNodeSpace = nodeSpace * Math.pow(2, (maxHeight || 5) - level);
    if (level === 1) {
        space = treePanelWidth / 2;
        offsetX = space - treeNodeR;
        offsetY = (level - 1) * levelOffset + treeNodeR + strokeWidth;
    } else {
        if (parentX !== undefined) {
            offsetX = parentX - (familyLength / 2) * levelNodeSpace + (index + 0.5) * levelNodeSpace;
            offsetY = (level - 1) * levelOffset + treeNodeR + strokeWidth;
        }
    }
    const isActive = node.id === relatedNode?.id;
    return (
        <g key={node.id}>
            {
                level > 1
                    ? <line x1={parentX} y1={parentY} x2={offsetX} y2={offsetY}
                            stroke={lineStrokeColor}
                            strokeWidth={lineStrokeWidth}/>
                    : null
            }
            {node.children
                ? node.children.map((child, index, family) => <VividTreeRecursive key={child.id}
                                                                                  node={child}
                                                                                  level={level + 1}
                                                                                  index={index}
                                                                                  familyLength={family.length}
                                                                                  parentX={offsetX}
                                                                                  parentY={offsetY}
                                                                                  maxHeight={maxHeight}
                                                                                  relatedNode={relatedNode}/>)
                : null
            }
            <circle style={{cursor: 'pointer'}} onClick={() => handleNodeClick(node)} stroke={circleStrokeColor}
                    r={treeNodeR} cx={offsetX} cy={offsetY}
                    fill={isActive ? circleFillActiveColor : circleFillColor}/>
            <text
                strokeWidth={1}
                fill={isActive ? textFillActiveColor : textFillColor}
                stroke={isActive ? textFillActiveColor : textFillColor}
                fontSize={fontSize}
                fontWeight={100}
                x={offsetX}
                y={offsetY + fontOffsetY}
                textAnchor="middle"
            >{node.value || node.id}</text>
        </g>
    );
};


export const VividTree: React.FC<{
    data: TreeNode<any>,
    svgHeight?: SVGHeight,
    svgWidth?: SVGWidth,
    relatedNode?: TreeNode
}> = ({data, svgHeight, svgWidth, relatedNode}) => {
    return (<svg width={svgWidth ?? '100%'} height={svgHeight ?? 480}>

            <VividTreeRecursive node={data} level={1} index={0} familyLength={1} parentX={0} parentY={0}
                                maxHeight={data.getHeight()} relatedNode={relatedNode}/>
        </svg>
    );
};