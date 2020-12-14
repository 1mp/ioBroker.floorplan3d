import {css} from '@emotion/css';
import {memoize} from 'lodash';

/*****************************************************************************************************
 * Background
 *****************************************************************************************************/

export const cssBackgroundColor = memoize((color: string): string => css`
	background-color: ${color};
`);

export const cssBackground = memoize((color: string): string => css`
	background: ${color};
`);

/*****************************************************************************************************
 * Border
 *****************************************************************************************************/

export const cssRounded = css`
	border-radius: 0.5rem;
`;

export const cssRoundedFull = css`
	border-radius: 9999px;
`;

export const cssBorder = css`
	border-style: solid;
`;

export const cssBorderBottom = css`
	border-bottom-style: solid;
`;

export const cssBorderWidth1 = css`
	border-width: 1px;
`;

export const cssBorderColor = memoize((color: string): string => css`
	border-color: ${color};
`);

export const cssNoBorder = css`
	border: none;
`;

/*****************************************************************************************************
 * Display
 *****************************************************************************************************/

export const cssInlineBlock = css`
	display: inline-block;
`;

export const cssBlock = css`
	display: block;
`;

/*****************************************************************************************************
 * Flex
 *****************************************************************************************************/

export const cssFlexBlock = css`
	display: flex;
`;

export const cssFlexAuto = css`
	flex: auto;
`;

export const cssFlex1 = css`
	flex: 1;
`;

export const cssFlex2 = css`
	flex: 2;
`;

export const cssFlex3 = css`
	flex: 3;
`;

export const cssFlex4 = css`
	flex: 4;
`;

export const cssNoShrink = css`
	flex-shrink: 0;
`;

export const cssFlexNone = css`
	flex: none;
`;

export const cssFlexRow = css`
	flex-direction: row;
`;

export const cssFlexColumn = css`
	flex-direction: column;
`;

export const cssItemsCenter = css`
	align-items: center;
`;

export const cssJustifyCenter = css`
	justify-content: center;
`;

export const cssJustifyFlexEnd = css`
	justify-content: flex-end;
`;

/*****************************************************************************************************
 * Float
 *****************************************************************************************************/

export const cssFloatLeft = css`
	float: left;
`;

export const cssFloatRight = css`
	float: right;
`;

/*****************************************************************************************************
 * Margin
 *****************************************************************************************************/

export const cssMarginAuto = css`
	margin: auto;
`;

export const cssMarginHorAuto = css`
	margin-left: auto;
	margin-right: auto;
`;

export const cssMargin = memoize((factor: number): string => css`
	margin: ${(factor * 0.25) + 'rem'};
`);

export const cssMarginTop = memoize((factor: number): string => css`
	margin-top: ${(factor * 0.25) + 'rem'};
`);

export const cssMarginLeft = memoize((factor: number): string => css`
	margin-left: ${(factor * 0.25) + 'rem'};
`);

export const cssMarginRight = memoize((factor: number): string => css`
	margin-right: ${(factor * 0.25) + 'rem'};
`);

export const cssMarginBottom = memoize((factor: number): string => css`
	margin-bottom: ${(factor * 0.25) + 'rem'};
`);

export const cssMarginHor = memoize((factor: number): string => css`
	margin-left: ${(factor * 0.25) + 'rem'};
	margin-right: ${(factor * 0.25) + 'rem'};
`);

export const cssMarginVer = memoize((factor: number): string => css`
	margin-top: ${(factor * 0.25) + 'rem'};
	margin-bottom: ${(factor * 0.25) + 'rem'};
`);

/*****************************************************************************************************
 * Opacity
 *****************************************************************************************************/

export const cssOpacity = memoize((opacity: number) => css`
	opacity: ${opacity};
`);

/*****************************************************************************************************
 * Overflow
 *****************************************************************************************************/

export const cssOverflowAuto = css`
	overflow: auto;
`;

export const cssOverflowHidden = css`
	overflow: hidden;
`;

/*****************************************************************************************************
 * Padding
 *****************************************************************************************************/

export const cssPadding = memoize((factor: number): string => css`
	padding: ${(factor * 0.25) + 'rem'};
`);

export const cssPaddingHor = memoize((factor: number): string => css`
	padding-left: ${(factor * 0.25) + 'rem'};
	padding-right: ${(factor * 0.25) + 'rem'};
`);

export const cssPaddingVer = memoize((factor: number): string => css`
	padding-top: ${(factor * 0.25) + 'rem'};
	padding-bottom: ${(factor * 0.25) + 'rem'};
`);

export const cssPaddingTop = memoize((factor: number): string => css`
	padding-top: ${(factor * 0.25) + 'rem'};
`);

export const cssPaddingBottom = memoize((factor: number): string => css`
	padding-bottom: ${(factor * 0.25) + 'rem'};
`);

export const cssPaddingLeft = memoize((factor: number): string => css`
	padding-left: ${(factor * 0.25) + 'rem'};
`);

export const cssPaddingRight = memoize((factor: number): string => css`
	padding-right: ${(factor * 0.25) + 'rem'};
`);

/*****************************************************************************************************
 * Position
 *****************************************************************************************************/

export const cssAbsolute = css`
	position: absolute;
`;

export const cssFixed = css`
	position: fixed;
`;

export const cssRelative = css`
	position: relative;
`;

export const cssPin = css`
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
`;

export const cssRight = css`
	right: 0;
`;

export const cssLeft = css`
	left: 0;
`;

export const cssIndex = memoize((index: number) => css`
	z-index: ${index};
`);

/*****************************************************************************************************
 * Shadow
 *****************************************************************************************************/

export const cssShadow = css`
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08), 0 1px 2px 0 rgba(0, 0, 0, 0.04);
`;

export const cssShadowMd = css`
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);
`;

export const cssShadowInner = css`
	box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
`;

/*****************************************************************************************************
 * Size
 *****************************************************************************************************/

export const cssBorderBox = css`
	box-sizing: border-box;
`;

export const cssContentBox = css`
	box-sizing: content-box;
`;

export const cssWidth = memoize((size: number): string => css`
	width: ${size + 'rem'};
`);

export const cssWidthEm = memoize((size: number): string => css`
	width: ${size + 'em'};
`);

export const cssWidthPercent = memoize((percent: number): string => css`
	width: ${percent + '%'};
`);

export const cssWidthPx = memoize((size: number): string => css`
	width: ${size + 'px'};
`);

export const cssHeight = memoize((size: number): string => css`
	height: ${size + 'rem'};
`);
export const cssHeightPx = memoize((size: number): string => css`
	height: ${size + 'px'};
`);

export const cssMinWidth = memoize((size: number): string => css`
	min-width: ${size + 'rem'};
`);

export const cssMaxWidth = memoize((size: number): string => css`
	max-width: ${size + 'rem'};
`);

export const cssMaxHeight = memoize((size: number): string => css`
	max-height: ${size + 'rem'};
`);

export const cssWidthFull = css`
	width: 100%;
`;

export const cssWidthFullMinus = memoize((minus: string): string => css`
	width: calc(100% - ${minus});
`);

export const cssHeightFull = css`
	height: 100%;
`;

export const cssHeightFullMinus = memoize((minus: string): string => css`
	height: calc(100% - ${minus});
`);

export const cssMinHeight0 = css`
	min-height: 0;
`;

export const cssMinWidth0 = css`
	min-width: 0;
`;

/*****************************************************************************************************
 * Text
 *****************************************************************************************************/

export const cssColor = memoize((color: string): string => css`
	color: ${color};
`);

export const cssFontSize = memoize((size: number): string => css`
	font-size: ${size + 'rem'};
`);

export const cssFontSizeRel = memoize((size: number): string => css`
	font-size: ${size + 'em'};
`);

export const cssTextLg = css`
	font-size: 1.5rem;
`;

export const cssBold = css`
	font-weight: bold;
`;

export const cssFontWeight = memoize((size: number): string => css`
  font-weight: ${size};
`);

export const cssTextAlign = memoize((align: 'left' | 'right' | 'center') => css`
	text-align: ${align};
`);

export const cssTextCenter = cssTextAlign('center');
export const cssTextLeft = cssTextAlign('left');
export const cssTextRight = cssTextAlign('right');

export const cssVerticalTop = css`
	vertical-align: top;
`;

export const cssVerticalMiddle = css`
	vertical-align: middle;
`;

export const cssVerticalBottom = css`
	vertical-align: bottom;
`;

export const cssVerticalInlineBlock = css`
	vertical-align: -.125em;
`;

export const cssTruncate = css`
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;

export const cssUpper = css`
	text-transform: uppercase;
`;

export const cssLeadingNone = css`
	line-height: 1;
`;

export const cssLeadingTight = css`
	line-height: 1.25;
`;

export const cssLeadingNormal = css`
	line-height: 1.5;
`;

export const cssLeadingLoose = css`
	line-height: 2;
`;

export const cssWhiteSpacePreWrap = css`
	white-space: pre-wrap;
`;

/*****************************************************************************************************
 * Cursor
 *****************************************************************************************************/

export const cssCursorDefault = css`
	cursor: default;
`;

export const cssCursorPointer = css`
	cursor: pointer;
`;

export const cssCursorRowResize = css`
	cursor: row-resize;
`;

export const cssCursorColResize = css`
	cursor: col-resize;
`;

export const cssCursorMove = css`
	cursor: move;
`;

/*****************************************************************************************************
 * Misc
 *****************************************************************************************************/

export const cssPointerEventsNone = css`
	pointer-events: none;
`;


/*****************************************************************************************************
 * visibility
 *****************************************************************************************************/
export const cssVisibilityVisible = css`
	visibility: visible;
`;

export const cssVisibilityHidden = css`
	visibility: hidden;
`;

/*****************************************************************************************************
 * word
 *****************************************************************************************************/
export const cssWordBreak = css`
	word-wrap: break-word;
`;

export const cssWordNormal = css`
	word-wrap: normal;
`;