import { Matrix } from 'ml-matrix';

export declare function getSimilarityTransformation(
    fromPoints: Matrix,
    toPoints: Matrix,
    allowReflection = false): {
        rotation: Matrix,
        scale: number,
        translation: Matrix,
        fromMean: Matrix,
        toMean: Matrix
    }