import { BaseType, EntityNameOrEntityNameExpression, Identifier, InterfaceType, ObjectType, ResolvedType, Signature, Symbol, SymbolWalker, Type, TypeParameter, TypePredicate, TypeReference } from "./_namespaces/ts";
/** @internal */
export declare function createGetSymbolWalker(getRestTypeOfSignature: (sig: Signature) => Type, getTypePredicateOfSignature: (sig: Signature) => TypePredicate | undefined, getReturnTypeOfSignature: (sig: Signature) => Type, getBaseTypes: (type: InterfaceType) => BaseType[], resolveStructuredTypeMembers: (type: ObjectType) => ResolvedType, getTypeOfSymbol: (sym: Symbol) => Type, getResolvedSymbol: (node: Identifier) => Symbol, getConstraintOfTypeParameter: (typeParameter: TypeParameter) => Type | undefined, getFirstIdentifier: (node: EntityNameOrEntityNameExpression) => Identifier, getTypeArguments: (type: TypeReference) => readonly Type[]): (accept?: (symbol: Symbol) => boolean) => SymbolWalker;
//# sourceMappingURL=symbolWalker.d.ts.map