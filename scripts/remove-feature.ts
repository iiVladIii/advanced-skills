import { Node, Project, SyntaxKind } from 'ts-morph';

const removedFeatureName = process.argv[2];
const featureState = process.argv[3];

if (!removedFeatureName) {
    throw new Error('Укажите название фича-флага');
}

if (!featureState) {
    throw new Error('Укажите состояние фичи (on/off)');
}

if (featureState !== 'on' && featureState !== 'off') {
    throw new Error('Некорректное значения состояния фичи (on/off)');
}

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

function isToggleFunction(node: Node) {
    let isToggleFeatures = false;

    node.forEachChild((child) => {
        if (
            child.isKind(SyntaxKind.Identifier) &&
            child.getText() === 'toggleFeatures'
        ) {
            isToggleFeatures = true;
        }
    });

    return isToggleFeatures;
}

files.forEach((sourceFile) => {
    sourceFile.forEachDescendant((node) => {
        if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
            const objectOptions = node.getFirstDescendantByKind(
                SyntaxKind.ObjectLiteralExpression,
            );

            if (!objectOptions) return;
            const onFunctionProperty = objectOptions?.getProperty('on');
            const offFunctionProperty = objectOptions?.getProperty('off');

            const featureNameProperty = objectOptions?.getProperty('name');

            const onFunction = onFunctionProperty?.getFirstDescendantByKind(
                SyntaxKind.ArrowFunction,
            );

            const offFunction = offFunctionProperty?.getFirstDescendantByKind(
                SyntaxKind.ArrowFunction,
            );

            const featureName = featureNameProperty
                ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
                ?.getText()
                .slice(1, -1);

            if (featureName !== removedFeatureName) return;

            if (featureState === 'on') {
                node.replaceWithText(onFunction?.getBodyText() ?? '');
            }

            if (featureState === 'off') {
                node.replaceWithText(offFunction?.getBodyText() ?? '');
            }
        }
    });
});

project.save();