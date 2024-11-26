/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as core from "../../core";
import * as serializers from "../index";
import * as OpikApi from "../../api/index";
import { NumericalFeedbackDefinitionPublic } from "./NumericalFeedbackDefinitionPublic";
import { CategoricalFeedbackDefinitionPublic } from "./CategoricalFeedbackDefinitionPublic";
export declare const FeedbackObjectPublic: core.serialization.Schema<serializers.FeedbackObjectPublic.Raw, OpikApi.FeedbackObjectPublic>;
export declare namespace FeedbackObjectPublic {
    type Raw = FeedbackObjectPublic.Numerical | FeedbackObjectPublic.Categorical;
    interface Numerical extends _Base, NumericalFeedbackDefinitionPublic.Raw {
        type: "numerical";
    }
    interface Categorical extends _Base, CategoricalFeedbackDefinitionPublic.Raw {
        type: "categorical";
    }
    interface _Base {
        id?: string | null;
        name: string;
        createdAt?: string | null;
        createdBy?: string | null;
        lastUpdatedAt?: string | null;
        lastUpdatedBy?: string | null;
    }
}