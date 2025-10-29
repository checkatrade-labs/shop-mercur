import { EntityManager } from "@mikro-orm/knex";
import { UpdateAttributeDTO } from "@mercurjs/framework";
import { Context, DAL, InferTypeOf } from "@medusajs/framework/types";
import Attribute from "./models/attribute";
import AttributePossibleValue from "./models/attribute-possible-value";
type Attribute = InferTypeOf<typeof Attribute>;
type AttributePossibleValue = InferTypeOf<typeof AttributePossibleValue>;
type InjectedDependencies = {
    attributeRepository: DAL.RepositoryService<Attribute>;
    attributePossibleValueRepository: DAL.RepositoryService<AttributePossibleValue>;
};
declare const AttributeModuleService_base: import("@medusajs/framework/utils").MedusaServiceReturnType<import("@medusajs/framework/utils").ModelConfigurationsToConfigTemplate<{
    readonly Attribute: import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
        id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
        name: import("@medusajs/framework/utils").TextProperty;
        description: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
        is_required: import("@medusajs/framework/utils").BooleanProperty;
        is_filterable: import("@medusajs/framework/utils").BooleanProperty;
        handle: import("@medusajs/framework/utils").TextProperty;
        metadata: import("@medusajs/framework/utils").NullableModifier<Record<string, unknown>, import("@medusajs/framework/utils").JSONProperty>;
        ui_component: import("@medusajs/framework/utils").EnumProperty<import("@mercurjs/framework").AttributeUIComponent[]>;
        values: import("@medusajs/framework/utils").HasMany<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
            id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
            value: import("@medusajs/framework/utils").TextProperty;
            rank: import("@medusajs/framework/utils").NumberProperty;
            metadata: import("@medusajs/framework/utils").NullableModifier<Record<string, unknown>, import("@medusajs/framework/utils").JSONProperty>;
            attribute: import("@medusajs/framework/utils").BelongsTo<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder</*elided*/ any>, "attribute">, undefined>;
        }>, "attribute_value">>;
        possible_values: import("@medusajs/framework/utils").HasMany<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
            id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
            value: import("@medusajs/framework/utils").TextProperty;
            rank: import("@medusajs/framework/utils").NumberProperty;
            metadata: import("@medusajs/framework/utils").NullableModifier<Record<string, unknown>, import("@medusajs/framework/utils").JSONProperty>;
            attribute: import("@medusajs/framework/utils").BelongsTo<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder</*elided*/ any>, "attribute">, undefined>;
        }>, "attribute_possible_value">>;
    }>, "attribute">;
    readonly AttributeValue: import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
        id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
        value: import("@medusajs/framework/utils").TextProperty;
        rank: import("@medusajs/framework/utils").NumberProperty;
        metadata: import("@medusajs/framework/utils").NullableModifier<Record<string, unknown>, import("@medusajs/framework/utils").JSONProperty>;
        attribute: import("@medusajs/framework/utils").BelongsTo<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
            id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
            name: import("@medusajs/framework/utils").TextProperty;
            description: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
            is_required: import("@medusajs/framework/utils").BooleanProperty;
            is_filterable: import("@medusajs/framework/utils").BooleanProperty;
            handle: import("@medusajs/framework/utils").TextProperty;
            metadata: import("@medusajs/framework/utils").NullableModifier<Record<string, unknown>, import("@medusajs/framework/utils").JSONProperty>;
            ui_component: import("@medusajs/framework/utils").EnumProperty<import("@mercurjs/framework").AttributeUIComponent[]>;
            values: import("@medusajs/framework/utils").HasMany<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder</*elided*/ any>, "attribute_value">>;
            possible_values: import("@medusajs/framework/utils").HasMany<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
                id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
                value: import("@medusajs/framework/utils").TextProperty;
                rank: import("@medusajs/framework/utils").NumberProperty;
                metadata: import("@medusajs/framework/utils").NullableModifier<Record<string, unknown>, import("@medusajs/framework/utils").JSONProperty>;
                attribute: import("@medusajs/framework/utils").BelongsTo<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder</*elided*/ any>, "attribute">, undefined>;
            }>, "attribute_possible_value">>;
        }>, "attribute">, undefined>;
    }>, "attribute_value">;
    readonly AttributePossibleValue: import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
        id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
        value: import("@medusajs/framework/utils").TextProperty;
        rank: import("@medusajs/framework/utils").NumberProperty;
        metadata: import("@medusajs/framework/utils").NullableModifier<Record<string, unknown>, import("@medusajs/framework/utils").JSONProperty>;
        attribute: import("@medusajs/framework/utils").BelongsTo<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
            id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
            name: import("@medusajs/framework/utils").TextProperty;
            description: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
            is_required: import("@medusajs/framework/utils").BooleanProperty;
            is_filterable: import("@medusajs/framework/utils").BooleanProperty;
            handle: import("@medusajs/framework/utils").TextProperty;
            metadata: import("@medusajs/framework/utils").NullableModifier<Record<string, unknown>, import("@medusajs/framework/utils").JSONProperty>;
            ui_component: import("@medusajs/framework/utils").EnumProperty<import("@mercurjs/framework").AttributeUIComponent[]>;
            values: import("@medusajs/framework/utils").HasMany<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
                id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
                value: import("@medusajs/framework/utils").TextProperty;
                rank: import("@medusajs/framework/utils").NumberProperty;
                metadata: import("@medusajs/framework/utils").NullableModifier<Record<string, unknown>, import("@medusajs/framework/utils").JSONProperty>;
                attribute: import("@medusajs/framework/utils").BelongsTo<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder</*elided*/ any>, "attribute">, undefined>;
            }>, "attribute_value">>;
            possible_values: import("@medusajs/framework/utils").HasMany<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder</*elided*/ any>, "attribute_possible_value">>;
        }>, "attribute">, undefined>;
    }>, "attribute_possible_value">;
}>>;
declare class AttributeModuleService extends AttributeModuleService_base {
    protected attributeRepository_: DAL.RepositoryService<Attribute>;
    protected attributePossibleValueRepository_: DAL.RepositoryService<AttributePossibleValue>;
    constructor({ attributeRepository, attributePossibleValueRepository, }: InjectedDependencies);
    /**
     *
     * @param input
     * @param sharedContext
     *
     * Useful to update attribute, allowing to upsert possible_values in the same operation. If "id"
     * is not provided for "possible_values" entries, it will lookup the DB by attributePossibleValue.value,
     * to update or create accordingly.
     *
     * Assumes caller will eventually refetch entities, for now, to reduce complexity of this
     * method and concentrate on upserting like ProductOption - ProductOptionValue from Medusa
     */
    updateAttributeWithUpsertOrReplacePossibleValues(input: UpdateAttributeDTO | UpdateAttributeDTO[], sharedContext?: Context<EntityManager>): Promise<{
        entities: any[];
        performedActions: DAL.PerformedActions;
    }>;
    protected updateAttributeWithUpsertOrReplacePossibleValues_(input: UpdateAttributeDTO[], sharedContext?: Context<EntityManager>): Promise<{
        entities: any[];
        performedActions: DAL.PerformedActions;
    }>;
}
export default AttributeModuleService;
